namespace AspNetCrud.Authorization.Roles
{
    public static class StaticRoleNames
    {
        public static class Host
        {
            public const string Admin = "Admin";
            public const string Driver = "Driver";
            public const string DriverPresentationName = "Motorista";         
            public const string HumanResources = "HumanResources";
            public const string HumanResourcesPresentationName = "Recursos Humanos";
        }

        public static class Tenants
        {
            public const string Admin = "Admin";
        }
    }
}
