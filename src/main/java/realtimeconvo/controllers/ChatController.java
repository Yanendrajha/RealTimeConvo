package realtimeconvo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import realtimeconvo.repositories.RoomRepository;

@RestController
public class ChatController {

    private final RoomRepository roomRepository;


    public ChatController(RoomRepository roomRepository) {
        this.roomRepository = roomRepository;
    }

    // For sending & Receiving Messages
}
