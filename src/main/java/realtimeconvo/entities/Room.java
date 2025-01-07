package realtimeconvo.entities;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;

@Document(collection = "rooms") // used to map the  class object to a document inside our collection;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Room {

    @Id
    private String id; // Mongo DB : unique Identifier;
    private String roomId; // Provided by client; (So that it can be easily shared)
    private List<Message> messages = new ArrayList<>(); // Used to store the messages;
}
