package com.svr.itsolutions.model;

public class Stat {
    private final String label;
    private final String value;

    public Stat(String label, String value) {
        this.label = label;
        this.value = value;
    }

    public String getLabel() { return label; }
    public String getValue() { return value; }
}
