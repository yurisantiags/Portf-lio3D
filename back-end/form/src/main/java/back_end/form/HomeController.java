package back_end.form;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping("/")
    public String home() {
        return "index"; // Este retorna o template `index.html` que está em `src/main/resources/static`
    }
}
