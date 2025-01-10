package realtimeconvo.controllers;

import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import realtimeconvo.entities.Message;
import realtimeconvo.entities.Room;
import realtimeconvo.payload.MessageRequest;
import realtimeconvo.repositories.RoomRepository;

import java.time.LocalDateTime;

@RestController
public class ChatController {

    private final RoomRepository roomRepository;


    public ChatController(RoomRepository roomRepository) {
        this.roomRepository = roomRepository;
    }

    // For sending & Receiving Messages
    @MessageMapping("/sendMessage/{roomId}")
    @SendTo("/topic/room/{roomId}")
    public Message sendMessage(
            @DestinationVariable String roomId,
            @RequestBody MessageRequest messageRequest
    ){
          Room room = roomRepository.findByRoomId(messageRequest.getRoomId());
          Message message = new Message();
          message.setContent(messageRequest.getContent());
          message.setSender(messageRequest.getSender());
          message.setTimeStamp(LocalDateTime.now());

          if(room != null) {
                room.getMessages().add(message);
                roomRepository.save(room);
          } else {
              throw new RuntimeException("Room not found");
          }

          return message;
    }
}
