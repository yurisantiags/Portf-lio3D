package back_end.form;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import io.github.cdimascio.dotenv.Dotenv;

@Configuration

public class DotenvConfig {

    @Bean
    public Dotenv dotenv() {
        return Dotenv.configure()
                     .directory("/Users/yurisantiago/Downloads/portfolio/back-end/form/config")
                     .filename("senha.env")
                     .load();
    }
}
