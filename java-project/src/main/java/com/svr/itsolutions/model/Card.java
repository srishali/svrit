package com.svr.itsolutions.model;

public class Card {
    private final String title;
    private final String icon;
    private final String description;
    private final boolean faded;

    public Card(String title, String icon, String description, boolean faded) {
        this.title = title;
        this.icon = icon;
        this.description = description;
        this.faded = faded;
    }

    public String getTitle() { return title; }
    public String getIcon() { return icon; }
    public String getDescription() { return description; }
    public boolean isFaded() { return faded; }
}
