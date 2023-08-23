package com.theravens.theravensback.controller;

import com.theravens.theravensback.model.MessageClient;
import com.theravens.theravensback.model.Produit;
import com.theravens.theravensback.service.MessageClientService;
import org.aspectj.bridge.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class MessageClientController {

    @Autowired
    private MessageClientService messageClientService;

    @GetMapping("/ws/message-client/all")
    public List<MessageClient> getAllMessageClient() { return this.messageClientService.getAll(); }

    @PostMapping("/ws/message-client/add")
    public MessageClient addMessage(@RequestBody MessageClient messageClient) { return this.messageClientService.add(messageClient); }
}
