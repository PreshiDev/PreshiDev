app.get('/api/cv', (req, res) => {
    const cvUrl = '/osamajavaid-resume.pdf'; // Provide the actual URL of your CV here
    res.json({ cvUrl });
});
