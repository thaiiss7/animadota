public record SendLikePayload(
    string Username, 
    Guid AnimalId, 
    Guid UserId,
    Usuario Usuario, 
    Animal Animal, 
    bool Aceito, 
    bool Gostou
);