public record SendLikePayload(
    string Username, 
    Guid AnimalId, 
    Usuario Usuario, 
    Animal Animal, 
    bool Aceito, 
    bool Gostou
);