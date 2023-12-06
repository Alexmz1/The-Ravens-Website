package com.theravens.theravensback.controller;

import com.theravens.theravensback.UtilisateurLogin;
import com.theravens.theravensback.model.Produit;
import com.theravens.theravensback.model.Utilisateur;
import com.theravens.theravensback.repository.UtilisateurRepository;
import com.theravens.theravensback.service.UtilisateurService;
import com.theravens.theravensback.JwtUtil;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class UtilisateurController {


    @Autowired
    private UtilisateurService utilisateurService;

    @Autowired
    private UtilisateurRepository utilisateurRepository;

    /*@Autowired
    private JwtUtil jwtUtil;*/

    @GetMapping("/ws/utilisateur/all")
    public List<Utilisateur> getAllUtilisateurs() { return this.utilisateurService.getAll(); }

    @GetMapping("/ws/utilisateur/{id}")
    public Utilisateur getAllUtilisateursById(@PathVariable int id) {
        Utilisateur utilisateur = utilisateurService.getUtilisateurById(id);
        if (utilisateur != null){
        return utilisateur;
        } else {
            // Vous pouvez lever une exception, retourner null ou retourner un Produit vide selon vos besoins
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Utilisateur non trouvé");
        }
    }

    @PostMapping("ws/utilisateur/add")
    public Utilisateur addUtilisateur(@RequestBody Utilisateur utilisateur) { return this.utilisateurService.add(utilisateur); }



    @PostMapping("/ws/utilisateur/login")
    public ResponseEntity<?> login(@RequestBody UtilisateurLogin request) {
        boolean estAuthentifie = utilisateurService.verifierAuthentification(request.getEmail(), request.getMdp());

        if (estAuthentifie) {
            Utilisateur utilisateur = utilisateurRepository.findByEmail(request.getEmail());
            String role = utilisateur.getRole(); // rôle stocké dans l'objet Utilisateur
            Integer id = utilisateur.getId();

            return ResponseEntity.ok(new UtilisateurLogin(id, "Connexion réussie", "Connexion réussie", role));
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("{\"message\": \"Identifiants incorrects\"}");
        }
    }

    /*@GetMapping("/ws/utilisateur/validate-session")
    public ResponseEntity<?> validerSession(HttpServletRequest request) {
        String token = extractTokenFromHeader(request);
        if (token != null && jwtUtil.validateToken(token)) {
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }
    private String extractTokenFromHeader(HttpServletRequest request) {
        String bearerToken = request.getHeader("Authorization");
        if (bearerToken != null && bearerToken.startsWith("Bearer ")) {
            return bearerToken.substring(7);
        }
        return null;
    }*/


    // Modification role utilisateur
    @PutMapping("/{id}")
    public ResponseEntity<Utilisateur> updateUtilisateur(@PathVariable Integer id, @RequestBody Utilisateur updateUtilisateur) {
        Utilisateur existingUser = utilisateurRepository.findById(id).orElse(null);

        if (existingUser == null) {
            return ResponseEntity.notFound().build();
        }

        existingUser.setRole(updateUtilisateur.getRole());

        existingUser.setNumRue(updateUtilisateur.getNumRue());
        existingUser.setRue(updateUtilisateur.getRue());
        existingUser.setVille(updateUtilisateur.getVille());
        existingUser.setCodePostal(updateUtilisateur.getCodePostal());
        existingUser.setPays(updateUtilisateur.getPays());
        Utilisateur savedUser = utilisateurRepository.save(existingUser);
        return ResponseEntity.ok(savedUser);
    }




    /*@PostMapping("/ws/utilisateur/login")
    public ResponseEntity<?> login(@RequestBody UtilisateurLogin request, HttpServletResponse response) {
        boolean estAuthentifie = utilisateurService.verifierAuthentification(request.getEmail(), request.getMdp());

        if (estAuthentifie) {
            Utilisateur utilisateur = utilisateurRepository.findByEmail(request.getEmail());
            String role = utilisateur.getRole();
            Integer id = utilisateur.getId();

            // Générer un token JWT
            String token = utilisateurService.generateToken(utilisateur);

            // Créez un cookie pour stocker le token de session
            Cookie cookie = new Cookie("sessionToken", token);
            cookie.setHttpOnly(true); // Empêche JavaScript d'accéder au cookie
            cookie.setMaxAge(3600); // Durée de validité du cookie en secondes (1 heure, par exemple)
            cookie.setPath("/"); // Définissez le chemin du cookie

            response.addCookie(cookie);

            return ResponseEntity.ok(new UtilisateurLogin(id, "Connexion réussie", "Connexion réussie", role));
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("{\"message\": \"Identifiants incorrects\"}");
        }
    }

    @PostMapping("/ws/utilisateur/logout")
    public ResponseEntity<?> logout(HttpServletResponse response) {
        // Supprimez le cookie de session en le rendant invalide
        Cookie cookie = new Cookie("sessionToken", "");
        cookie.setMaxAge(0); // Rend le cookie invalide en définissant une durée de vie négative
        cookie.setPath("/");
        response.addCookie(cookie);

        return ResponseEntity.ok("Déconnexion réussie.");
    }


    @GetMapping("/ws/utilisateur/validate-session")
    public ResponseEntity<?> validerSession(HttpServletRequest request, @CookieValue(value = "sessionToken", required = false) String sessionToken) {
        if (sessionToken != null && utilisateurService.validateToken(sessionToken)) {
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }*/
}
