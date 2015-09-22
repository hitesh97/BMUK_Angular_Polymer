
using Microsoft.Data.Entity;
using Microsoft.Data.Entity.Infrastructure;

namespace BMUK_SPA.Model.Mapping
{
    public class BMUKContext : DbContext
    {
        public DbSet<Member> Members { get; set; }

        public DbSet<Title> Titles { get; set; }
        

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(Startup.Configuration.Get("Data:DefaultConnection:ConnectionString"));
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Member>().Key(m => m.Id);
            builder.Entity<Title>().Key(m => m.Id);
        }
    }
}
