package back_end.form;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/contact")
public class ContactController {

    @Autowired
    private EmailService emailService;

    @PostMapping("/send")
    public String sendEmail(@RequestBody ContactForm contactForm) {
        String to = "yurisantiagx5@gmail.com";
        String subject = "New Contact Form Submission";
        String body = "Name: " + contactForm.getName() + "\nEmail: " + contactForm.getEmail() + "\nMessage: " + contactForm.getMessage();

        emailService.sendEmail(to, subject, body);
        return "Email sent successfully";
    }

    public static class ContactForm {
        private String name;
        private String email;
        private String message;

        // Getters and setters
        public String getName() { return name; }
        public void setName(String name) { this.name = name; }

        public String getEmail() { return email; }
        public void setEmail(String email) { this.email = email; }

        public String getMessage() { return message; }
        public void setMessage(String message) { this.message = message; }
    }
}
