package com.theravens.theravensback.repository;

import com.theravens.theravensback.model.MessageClient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MessageClientRepository extends JpaRepository<MessageClient, Integer> {
}
