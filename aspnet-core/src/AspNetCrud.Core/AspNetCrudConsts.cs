using AspNetCrud.Debugging;

namespace AspNetCrud
{
    public class AspNetCrudConsts
    {
        public const string LocalizationSourceName = "AspNetCrud";

        public const string ConnectionStringName = "Default";

        public const bool MultiTenancyEnabled = true;


        /// <summary>
        /// Default pass phrase for SimpleStringCipher decrypt/encrypt operations
        /// </summary>
        public static readonly string DefaultPassPhrase =
            DebugHelper.IsDebug ? "gsKxGZ012HLL3MI5" : "b2641b4b32d24635af982ce85598e8b4";
    }
}
