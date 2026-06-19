using Animadota.Common.Results;

public class DeleteUserPhotoUseCase(
    IPhotoUserService userPhotoService
)
{
    public async Task<Result<DeleteUserPhotoResponse>> Do(DeleteUserPhotoPayload payload)
    {
        var photo = await userPhotoService.GetPhotoById(payload.Id);
        if (photo == null)
            return Result<DeleteUserPhotoResponse>.Fail("Photo not found");

        await userPhotoService.Delete(photo.Id);
        return Result<DeleteUserPhotoResponse>.Success(new());
    }
}