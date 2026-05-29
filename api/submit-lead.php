<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Only POST requests are allowed.']);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);
if (empty($input)) {
    $input = $_POST;
}

$fullName = trim($input['full_name'] ?? '');
$schoolName = trim($input['school_name'] ?? '');
$email = trim($input['email'] ?? '');
$phone = trim($input['phone'] ?? '');
$role = trim($input['role'] ?? '');
$studentCount = trim($input['student_count'] ?? '');
$schoolType = trim($input['school_type'] ?? '');
$sourceUrl = trim($input['source_url'] ?? ($_SERVER['HTTP_REFERER'] ?? ''));

if (!$fullName || !$schoolName || !$email || !$phone || !$role) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Please complete all required fields.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Please provide a valid email address.']);
    exit;
}

// Update these values for your shared hosting environment if environment variables are not available.
$dbHost = getenv('DB_HOST') ?: 'localhost';
$dbUser = getenv('DB_USER') ?: 'root';
$dbPass = getenv('DB_PASS') ?: '';
$dbName = getenv('DB_NAME') ?: 'school';

$mysqli = new mysqli($dbHost, $dbUser, $dbPass, $dbName);
if ($mysqli->connect_errno) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Database connection failed.']);
    exit;
}

$mysqli->set_charset('utf8mb4');
$stmt = $mysqli->prepare('INSERT INTO leads (full_name, school_name, email, phone, `role`, student_count, school_type, source_url, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, NOW())');
if (!$stmt) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Unable to prepare the lead insertion.']);
    exit;
}

$stmt->bind_param('ssssssss', $fullName, $schoolName, $email, $phone, $role, $studentCount, $schoolType, $sourceUrl);
if (!$stmt->execute()) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Unable to save lead information.']);
    $stmt->close();
    $mysqli->close();
    exit;
}

/*
// Build notification email after successful database insert.
$notificationSubject = 'New Demo Request Submitted';
$notificationBody = "Full Name: {$fullName}\r\n";
$notificationBody .= "Email: {$email}\r\n";
$notificationBody .= "Phone: {$phone}\r\n";
$notificationBody .= "School Name: {$schoolName}\r\n";
$notificationBody .= "Role: {$role}\r\n";
$notificationBody .= "Number of Students: {$studentCount}\r\n";
$notificationBody .= "Submitted At: " . date('Y-m-d H:i:s') . "\r\n";
$notificationBody .= "IP Address: " . ($_SERVER['REMOTE_ADDR'] ?? 'Unknown') . "\r\n";

$notificationFrom = getenv('NOTIFICATION_FROM') ?: 'notifications@mydomain.com';
$notificationTo = getenv('NOTIFICATION_EMAIL') ?: 'your@email.com';
$headers = "From: {$notificationFrom}\r\n";
$headers .= "Reply-To: {$email}\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

if (!mail($notificationTo, $notificationSubject, $notificationBody, $headers)) {
    error_log('Lead notification email failed for lead: ' . $fullName . ' <' . $email . '>');
}
*/

$stmt->close();
$mysqli->close();

echo json_encode(['success' => true, 'message' => 'Lead submitted successfully.']);
