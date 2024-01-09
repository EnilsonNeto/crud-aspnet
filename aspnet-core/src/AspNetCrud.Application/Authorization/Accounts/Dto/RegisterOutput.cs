namespace AspNetCrud.Authorization.Accounts.Dto
{
    public class RegisterOutput
    {
        public bool CanLogin { get; set; }

        public long UserId { get; set; }
    }
}
