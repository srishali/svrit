package com.svr.itsolutions.model;

public class ClientLogo {
    private final String name;
    private final String url;

    public ClientLogo(String name, String url) {
        this.name = name;
        this.url = url;
    }

    public String getName() { return name; }
    public String getUrl() { return url; }
}
