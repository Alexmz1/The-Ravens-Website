package com.theravens.theravensback.service;

import com.theravens.theravensback.model.MessageClient;
import com.theravens.theravensback.model.Produit;
import com.theravens.theravensback.repository.MessageClientRepository;
import org.aspectj.bridge.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MessageClientService {

    @Autowired
    private MessageClientRepository messageClientRepository;

    public List<MessageClient> getAll(){
        return this.messageClientRepository.findAll();
    }

    public MessageClient add(MessageClient messageClient) {return messageClientRepository.save(messageClient);}
}
