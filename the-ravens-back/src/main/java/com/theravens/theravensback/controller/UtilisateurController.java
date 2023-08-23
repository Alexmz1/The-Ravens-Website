package com.theravens.theravensback.controller;

import com.theravens.theravensback.UtilisateurLogin;
import com.theravens.theravensback.model.Utilisateur;
import com.theravens.theravensback.repository.UtilisateurRepository;
import com.theravens.theravensback.service.UtilisateurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class UtilisateurController {


    @Autowired
    private UtilisateurService utilisateurService;

    @Autowired
    private UtilisateurRepository utilisateurRepository;

    @GetMapping("/ws/utilisateur/all")
    public List<Utilisateur> getAllUtilisateurs() { return this.utilisateurService.getAll(); }

    @PostMapping("ws/utilisateur/add")
    public Utilisateur addUtilisateur(@RequestBody Utilisateur utilisateur) { return this.utilisateurService.add(utilisateur); }



    @PostMapping("/ws/utilisateur/login")
    public ResponseEntity<?> login(@RequestBody UtilisateurLogin request) {
        boolean estAuthentifie = utilisateurService.verifierAuthentification(request.getEmail(), request.getMdp());

        if (estAuthentifie) {
            Utilisateur utilisateur = utilisateurRepository.findByEmail(request.getEmail());
            String role = utilisateur.getRole(); // Supposons que le rôle est stocké dans l'objet Utilisateur

            return ResponseEntity.ok(new UtilisateurLogin("Connexion réussie", "Connexion réussie", role));
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("{\"message\": \"Identifiants incorrects\"}");
        }
    }


    // Modification role utilisateur
    @PutMapping("/{id}")
    public ResponseEntity<Utilisateur> updateUtilisateur(@PathVariable Integer id, @RequestBody Utilisateur updateUtilisateur) {
        Utilisateur existingUser = utilisateurRepository.findById(id).orElse(null);

        if (existingUser == null) {
            return ResponseEntity.notFound().build();
        }

        existingUser.setRole(updateUtilisateur.getRole());
        Utilisateur savedUser = utilisateurRepository.save(existingUser);
        return ResponseEntity.ok(savedUser);
    }
}
