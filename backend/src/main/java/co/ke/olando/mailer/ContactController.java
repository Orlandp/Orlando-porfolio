package co.ke.olando.mailer;

import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/contact")
public class ContactController {

    private final MailService mailService;

    ContactController(MailService mailService) {
        this.mailService = mailService;
    }

    @PostMapping
    ResponseEntity<Void> send(@Valid @RequestBody ContactRequest request) {
        mailService.sendContactMessage(request);
        return ResponseEntity.accepted().build();
    }
}
