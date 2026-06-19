using Animadota.Results;

public class CreateUserPhotoUseCase(
    IPhotoUserService photoUserService
)
{
    public async Task<Result<CreateUserPhotoResponse>> Do(CreateUserPhotoPayload payload)
    {
        var photo = await photoUserService.Create(payload.Url, payload.UserId);
        if (photo == null)
            return Result<CreateUserPhotoResponse>.Fail("User not found");
        return Result<CreateUserPhotoResponse>.Success(new(photo.Url));
    }
}