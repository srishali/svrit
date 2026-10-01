package com.svr.itsolutions.model;

import java.util.List;
import java.util.Map;

public class SiteData {

    public static final Map<String, Object> SITE = Map.of(
            "companyName", "SVR IT Software Solutions",
            "logoPrimary", "SVR",
            "logoSecondary", "IT Software Solutions",
            "address", "1201 Hays Street, Tallahassee, FL 32301",
            "location", "Tallahassee, FL 32301",
            "phone", "+91 98497 46408",
            "email", "subhan432@svritsolutions.com"
    );

    public static final List<Map<String, String>> NAV_LINKS = List.of(
            Map.of("label", "Home", "href", "#home"),
            Map.of("label", "About us", "href", "#about"),
            Map.of("label", "Services", "href", "#services"),
            Map.of("label", "Jobs", "href", "#jobs"),
            Map.of("label", "Contact us", "href", "#contact")
    );

    public static final List<Card> FEATURE_CARDS = List.of(
            new Card("Tailored Solutions", "pen-tool",
                    "We understand that every business is unique. That's why we offer customized staffing solutions tailored to your specific requirements. Our extensive network of experienced developers, designers, and IT consultants ensures that you have access to the best talent in the industry. We pride ourselves on our rigorous selection process, which guarantees that only the most qualified candidates join your team.",
                    false),
            new Card("Beyond Staffing", "clipboard",
                    "Our consulting services go beyond just staffing. We provide comprehensive support throughout the entire website development lifecycle, from initial planning and design to implementation and maintenance. Our team of experts stays up-to-date with the latest technologies and industry trends, ensuring that your website is not only visually stunning but also highly functional and secure.",
                    false),
            new Card("Cost Effective", "wallet",
                    "Partner with SVR IT Software Solutions and experience the difference that professional IT staffing and consulting can make. Let us help you to achieve your global business goals with our reliable, experienced, efficient, and cost-effective solutions. Contact us today to learn more about how we can support your advanced website development projects and take your online presence to the next level.",
                    true)
    );

    public static final List<Card> SERVICE_CARDS = List.of(
            new Card("Right Talent", "target",
                    "We understand that the foundation of any successful business is its people, and we are committed to providing tailored staffing solutions that align with your company's goals.",
                    false),
            new Card("Our Approach", "handshake",
                    "Our approach combines deep industry expertise with a personalized touch, ensuring that we not only meet but exceed your staffing and recruiting expectations.",
                    false),
            new Card("Talent Support", "headphones",
                    "We are dedicated to helping your organization achieve its full potential by providing the talent and expertise needed to succeed in today's competitive landscape.",
                    true)
    );

    public static final List<Stat> DREAM_STATS = List.of(
            new Stat("Client Satisfaction", "98"),
            new Stat("Candidate Satisfaction", "95")
    );

    public static final List<String> DREAM_IMAGES = List.of(
            "https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwzfHx0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwwfHx8fDE3ODk4OTk4NjF8MA&ixlib=rb-4.1.0&q=85",
            "https://images.pexels.com/photos/3862154/pexels-photo-3862154.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    );

    public static final String HERO_IMAGE =
            "https://images.unsplash.com/photo-1759310610325-2c7cb621e5e3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzF8MHwxfHNlYXJjaHwyfHxidXNpbmVzcyUyMG1lZXRpbmclMjBoYW5kc2hha2V8ZW58MHx8fHwxNzg5ODk5ODYxfDA&ixlib=rb-4.1.0&q=85";

    public static final List<Stat> WORLD_STATS = List.of(
            new Stat("Years Experience", "8+"),
            new Stat("Expert Trainers", "24+"),
            new Stat("Companies", "20+")
    );

    public static final List<ClientLogo> CLIENT_LOGOS = List.of(
            new ClientLogo("Kyndryl", "https://events.foundryco.com/wp-content/uploads/2022/03/Kyndryl_500x200_wp.png"),
            new ClientLogo("DXC Technologies", "https://www.cxtoday.com/wp-content/uploads/2023/04/DXC.png"),
            new ClientLogo("Sutherland", "https://getvectorlogo.com/wp-content/uploads/2019/01/sutherland-global-services-vector-logo.png"),
            new ClientLogo("Insight Global", "https://pub-mediabox-storage.rxweb-prd.com/exhibitor/cover/exh-e7b1a36d-0bc2-426c-8a52-c8b93e46c840/desktop-cover/ca0f6dbd-b5cc-409c-be44-895b628df72a.png"),
            new ClientLogo("Rose International", "https://mms.businesswire.com/media/20220421005020/en/770799/23/Logowtm.jpg"),
            new ClientLogo("Verizon", "https://pentagram-production.imgix.net/ba1eda20-927e-47ad-882b-037993fb348a/mb_verizon_01.jpg"),
            new ClientLogo("Experis", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq79kt8ZYxQC3RMd8OVVgOGtiHICZQaIebaQ&s"),
            new ClientLogo("IBM", "https://blog.logomaster.ai/hs-fs/hubfs/ibm-logo-2.jpg")
    );
}
