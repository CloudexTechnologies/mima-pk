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

$name  = htmlspecialchars(trim($_POST['name']  ?? ''), ENT_QUOTES, 'UTF-8');
$email = filter_var(trim($_POST['email'] ?? ''), FILTER_VALIDATE_EMAIL);
$phone = htmlspecialchars(trim($_POST['phone'] ?? ''), ENT_QUOTES, 'UTF-8');
$role  = htmlspecialchars(trim($_POST['role']  ?? ''), ENT_QUOTES, 'UTF-8');

if (!$name || !$email || !$role) {
    http_response_code(400);
    echo json_encode(['error' => 'Name, email, and role are required.']);
    exit;
}

// ── Replace with your Resend API key from resend.com/api-keys ──
$apiKey = 're_F6FVU986_J2JXUo6tRKruArUbFTt6vgJ5';

$attachments = [];
if (!empty($_FILES['resume']) && $_FILES['resume']['error'] === UPLOAD_ERR_OK) {
    $file = $_FILES['resume'];
    if ($file['size'] > 5 * 1024 * 1024) {
        http_response_code(400);
        echo json_encode(['error' => 'Resume must be under 5 MB.']);
        exit;
    }
    $attachments[] = [
        'filename' => basename($file['name']),
        'content'  => base64_encode(file_get_contents($file['tmp_name'])),
    ];
}

$resumeNote = !empty($attachments) ? 'Attached: ' . $attachments[0]['filename'] : 'Not provided';

$html = '
<div style="font-family:sans-serif;max-width:600px;margin:0 auto;color:#1a1a1a">
  <h2 style="color:#1a3a5c;border-bottom:2px solid #1a3a5c;padding-bottom:8px">New Job Application</h2>
  <table style="width:100%;border-collapse:collapse">
    <tr><td style="padding:8px 0;color:#666;width:140px">Name</td><td style="padding:8px 0;font-weight:600">' . $name . '</td></tr>
    <tr><td style="padding:8px 0;color:#666">Email</td><td style="padding:8px 0"><a href="mailto:' . $email . '" style="color:#1a3a5c">' . $email . '</a></td></tr>
    <tr><td style="padding:8px 0;color:#666">Phone</td><td style="padding:8px 0">' . ($phone ?: '—') . '</td></tr>
    <tr><td style="padding:8px 0;color:#666">Position</td><td style="padding:8px 0;font-weight:600">' . $role . '</td></tr>
    <tr><td style="padding:8px 0;color:#666">Resume</td><td style="padding:8px 0">' . $resumeNote . '</td></tr>
  </table>
  <p style="margin-top:24px;font-size:12px;color:#999">Sent from mima.pk careers form · Reply directly to respond to ' . $name . '</p>
</div>';

$payload = [
    'from'     => 'Mima Groups Careers <noreply@mima.pk>',
    'to'       => ['career@mima.pk'],
    'reply_to' => $email,
    'subject'  => 'New Application — ' . $role . ' | ' . $name,
    'html'     => $html,
];

if (!empty($attachments)) {
    $payload['attachments'] = $attachments;
}

$ch = curl_init('https://api.resend.com/emails');
curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST           => true,
    CURLOPT_POSTFIELDS     => json_encode($payload),
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
    echo json_encode(['error' => 'Failed to send application.']);
}
