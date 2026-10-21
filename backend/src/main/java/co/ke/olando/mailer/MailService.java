package co.ke.olando.mailer;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class MailService {

    private final JavaMailSender mailSender;
    private final String recipient;
    private final String from;

    MailService(JavaMailSender mailSender,
                @Value("${contact.recipient}") String recipient,
                @Value("${spring.mail.username}") String from) {
        this.mailSender = mailSender;
        this.recipient = recipient;
        this.from = from;
    }

    void sendContactMessage(ContactRequest request) {
        SimpleMailMessage mail = new SimpleMailMessage();
        // Gmail only accepts the authenticated account as From; the visitor's
        // address goes in Reply-To so hitting reply answers them, not yourself.
        mail.setFrom(from);
        mail.setTo(recipient);
        mail.setReplyTo(request.email());
        mail.setSubject("Portfolio enquiry from " + request.name());
        mail.setText("""
                %s <%s> sent this through your portfolio contact form:

                %s
                """.formatted(request.name(), request.email(), request.message()));
        mailSender.send(mail);
    }
}
