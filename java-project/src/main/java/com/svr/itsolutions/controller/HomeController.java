package com.svr.itsolutions.controller;

import com.svr.itsolutions.model.*;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.util.List;

@Controller
public class HomeController {

    @GetMapping("/")
    public String home(Model model) {
        model.addAttribute("site", SiteData.SITE);
        model.addAttribute("navLinks", SiteData.NAV_LINKS);
        model.addAttribute("featureCards", SiteData.FEATURE_CARDS);
        model.addAttribute("serviceCards", SiteData.SERVICE_CARDS);
        model.addAttribute("dreamStats", SiteData.DREAM_STATS);
        model.addAttribute("dreamImages", SiteData.DREAM_IMAGES);
        model.addAttribute("heroImage", SiteData.HERO_IMAGE);
        model.addAttribute("worldStats", SiteData.WORLD_STATS);
        model.addAttribute("clientLogos", SiteData.CLIENT_LOGOS);
        model.addAttribute("year", java.time.Year.now().getValue());
        return "index";
    }

    @PostMapping("/submit-cv")
    public String submitCv(@RequestParam String firstName,
                           @RequestParam(required = false) String lastName,
                           @RequestParam(required = false) String phone,
                           @RequestParam String email,
                           RedirectAttributes attrs) {
        attrs.addFlashAttribute("message",
                "Thanks " + firstName + "! Your CV has been received.");
        return "redirect:/#jobs";
    }
}
