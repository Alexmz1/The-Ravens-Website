package com.theravens.theravensback.service;

import com.theravens.theravensback.UtilisateurLogin;
import com.theravens.theravensback.model.Produit;
import com.theravens.theravensback.model.Utilisateur;
import com.theravens.theravensback.repository.UtilisateurRepository;
import io.jsonwebtoken.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;


@Service
public class UtilisateurService {

    @Autowired
    private UtilisateurRepository utilisateurRepository;

    public List<Utilisateur> getAll(){
        return this.utilisateurRepository.findAll();
    }

    public Utilisateur add(Utilisateur utilisateur) { return this.utilisateurRepository.save(utilisateur);}


    public boolean verifierAuthentification(String email, String mdp) {
        Utilisateur utilisateur = utilisateurRepository.findByEmail(email);

        if (utilisateur != null && utilisateur.getMdp().equals(mdp)) {
            return true;
        }

        return false;
    }

    /*public String generateToken() {
        // Générer le token en utilisant une bibliothèque comme JWT
        String token = // générer le token ici

        return token;
    }*/

    /*@Value("${jwt.secret}")
    private String jwtSecret;

    // ...

    public String generateToken(Utilisateur utilisateur) {
        Claims claims = Jwts.claims();
        claims.put("id", utilisateur.getId());
        claims.put("email", utilisateur.getEmail());
        claims.put("role", utilisateur.getRole());

        Date now = new Date();
        Date expiration = new Date(now.getTime() + (3600 * 1000)); // Token valide pendant 1 heure

        String token = Jwts.builder()
                .setClaims(claims)
                .setIssuedAt(now)
                .setExpiration(expiration)
                .signWith(SignatureAlgorithm.HS256, jwtSecret)
                .compact();

        return token;
    }*/



    // Modification role utilisateur
    public Utilisateur updateUtilisateur(Integer id, Utilisateur updateUtilisateur) {
        Optional<Utilisateur> existingUser = utilisateurRepository.findById(id);

        if (existingUser.isPresent()) {
            Utilisateur userToUpdate = existingUser.get();
            userToUpdate.setRole(updateUtilisateur.getRole());
            System.out.println("Mise à jour de l'utilisateur : " + userToUpdate);
            return utilisateurRepository.save(userToUpdate);
        }

        return null; // Ou générer une exception appropriée si l'utilisateur n'existe pas
    }

    public Utilisateur getUtilisateurById(Integer id){
        return utilisateurRepository.findById(id).orElse(null);
    }





    /*@Value("${jwt.secret}")
    private String jwtSecret;

    @Value("${jwt.expiration}")
    private Long jwtExpiration;

    // ...

    public String generateToken(Utilisateur utilisateur) {
        Claims claims = Jwts.claims();
        claims.put("id", utilisateur.getId());
        claims.put("email", utilisateur.getEmail());
        claims.put("role", utilisateur.getRole());

        Date now = new Date();
        Date expiration = new Date(now.getTime() + jwtExpiration);

        String token = Jwts.builder()
                .setClaims(claims)
                .setIssuedAt(now)
                .setExpiration(expiration)
                .signWith(SignatureAlgorithm.HS512, jwtSecret)
                .compact();

        return token;
    }

    public boolean validateToken(String token) {
        try {
            // Essayez de parser le token JWT en utilisant la clé secrète
            Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(token);
            return true;
        } catch (ExpiredJwtException | UnsupportedJwtException | MalformedJwtException | SignatureException | IllegalArgumentException ex) {
            // Une exception sera levée si le token est invalide
            // Vous pouvez gérer les exceptions de manière appropriée ici
            return false;
        }
    }*/
}
