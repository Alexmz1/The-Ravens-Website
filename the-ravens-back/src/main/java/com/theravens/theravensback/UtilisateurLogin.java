package com.theravens.theravensback;

public class UtilisateurLogin {
    private String email;
    private String mdp;
    private String role;

    public UtilisateurLogin(String email, String mdp, String role) {
        this.email = email;
        this.mdp = mdp;
        this.role = role;
    }
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMdp() {
        return mdp;
    }

    public void setMdp(String mdp) {
        this.mdp = mdp;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

}

