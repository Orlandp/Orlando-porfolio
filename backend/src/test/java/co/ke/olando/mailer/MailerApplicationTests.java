package co.ke.olando.mailer;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest(properties = {
		"MAIL_USERNAME=test@example.com",
		"MAIL_PASSWORD=test"
})
class MailerApplicationTests {

	@Test
	void contextLoads() {
	}

}
