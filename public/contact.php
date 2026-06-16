<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed.']);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);
$name        = htmlspecialchars(trim($input['name']        ?? ''), ENT_QUOTES, 'UTF-8');
$company     = htmlspecialchars(trim($input['company']     ?? ''), ENT_QUOTES, 'UTF-8');
$email       = filter_var(trim($input['email'] ?? ''), FILTER_VALIDATE_EMAIL);
$projectType = htmlspecialchars(trim($input['projectType'] ?? ''), ENT_QUOTES, 'UTF-8');
$message     = htmlspecialchars(trim($input['message']     ?? ''), ENT_QUOTES, 'UTF-8');

if (!$name || !$email) {
    http_response_code(400);
    echo json_encode(['error' => 'Name and email are required.']);
    exit;
}

// ── Replace with your Resend API key from resend.com/api-keys ──
$apiKey = 're_F6FVU986_J2JXUo6tRKruArUbFTt6vgJ5';

$subject = 'New Enquiry — ' . ($projectType ?: 'General') . ' | ' . $name;

$html = '
<div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1a1a1a">
  <h2 style="color:#1a3a5c;border-bottom:2px solid #1a3a5c;padding-bottom:8px">New Project Enquiry</h2>
  <table style="width:100%;border-collapse:collapse">
    <tr><td style="padding:8px 0;color:#666;width:140px">Name</td><td style="padding:8px 0;font-weight:600">' . $name . '</td></tr>
    <tr><td style="padding:8px 0;color:#666">Company</td><td style="padding:8px 0">' . ($company ?: '—') . '</td></tr>
    <tr><td style="padding:8px 0;color:#666">Email</td><td style="padding:8px 0"><a href="mailto:' . $email . '" style="color:#1a3a5c">' . $email . '</a></td></tr>
    <tr><td style="padding:8px 0;color:#666">Project Type</td><td style="padding:8px 0">' . ($projectType ?: '—') . '</td></tr>
  </table>
  <div style="margin-top:20px">
    <p style="color:#666;margin-bottom:6px">Message / Brief</p>
    <div style="background:#f5f5f5;padding:16px;border-radius:6px;white-space:pre-wrap">' . ($message ?: '—') . '</div>
  </div>
  <p style="margin-top:24px;font-size:12px;color:#999">Sent from mima.pk contact form · Reply directly to respond to ' . $name . '</p>
</div>';

$payload = json_encode([
    'from'     => 'Mima Groups Website <noreply@mima.pk>',
    'to'       => ['info@mima.pk'],
    'reply_to' => $email,
    'subject'  => $subject,
    'html'     => $html,
]);

$ch = curl_init('https://api.resend.com/emails');
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST           => true,
    CURLOPT_POSTFIELDS     => $payload,
    CURLOPT_HTTPHEADER     => [
        'Authorization: Bearer ' . $apiKey,
        'Content-Type: application/json',
    ],
]);
$result   = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($httpCode >= 200 && $httpCode < 300) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to send email.']);
}
