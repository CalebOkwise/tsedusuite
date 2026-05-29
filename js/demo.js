document.addEventListener('DOMContentLoaded', function(){
  const form = document.getElementById('demoForm');
  const errorEl = document.getElementById('error');
  const submitBtn = document.getElementById('submitBtn');

  function setError(msg){ errorEl.textContent = msg || ''; }

  form.addEventListener('submit', async function(e){
    e.preventDefault();
    setError('');
    submitBtn.disabled = true;

    const data = {
      full_name: form.fullName.value.trim(),
      school_name: form.schoolName.value.trim(),
      email: form.email.value.trim(),
      phone: form.phone.value.trim(),
      role: form.role.value.trim(),
      student_count: form.studentCount.value.trim(),
      school_type: form.schoolType.value.trim(),
      source_url: window.location.href
    };

    if (!data.full_name || !data.school_name || !data.email || !data.phone || !data.role){
      setError('Please complete all required fields.');
      submitBtn.disabled = false;
      return;
    }

    try{
      const endpoint = new URL('api/submit-lead.php', window.location.href).href;
      const resp = await fetch(endpoint, {
        method:'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(data)
      });
      const text = await resp.text();
      let json = null;
      if (text) {
        try {
          json = JSON.parse(text);
        } catch (parseError) {
          console.error('Invalid JSON response:', text);
          throw new Error('Server returned an invalid response.');
        }
      }
      if (!resp.ok) {
        throw new Error(json?.message || `Submission failed (${resp.status})`);
      }
      if (json?.success !== true) {
        throw new Error(json?.message || 'Submission failed');
      }
      window.location.href = 'demo-access.html';
    }catch(err){
      console.error('Submit error:', err);
      setError(err.message || 'Unable to submit the form right now.');
      submitBtn.disabled = false;
    }
  });
});
