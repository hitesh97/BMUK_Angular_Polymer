using System;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace BMUK_SPA.Model
{
    [Table("Title")]
    public class Title
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column("Id", TypeName = "int")]
        public int Id { get; set; }

        [DefaultValue("")]
        [Required]
        [Column("Code", TypeName = "string")]
        public string Code { get; set; }

        [DefaultValue("")]
        [Required]
        [Column("Description", TypeName = "string")]
        public string Description { get; set; }
    }


    [Table("NaatDirectory")]
    public class Member
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Column("Id", TypeName = "int")]
        public int Id { get; set; }

        [DefaultValue(-1)]
        [Display(Name = "Head of House")]
        [Column("ParentId", TypeName = "int")]
        public int ParentId { get; set; }

        [DefaultValue("")]
        [Required]
        [Column("Title", TypeName = "string")]
        public string Title { get; set; }

        [DefaultValue("")]
        [Required]
        [Column("Surname", TypeName = "string")]
        public string Surname { get; set; }

        [DefaultValue("")]
        [Required]
        [Display(Name = "First Name")]
        [Column("First Name", TypeName = "string")]
        public string FirstName { get; set; }

        [DefaultValue("")]
        [Required]
        [Display(Name = "Birth Year")]
        [Column("Birth Year", TypeName = "string")]
        [Range(1800, 9999, ErrorMessage = "Birth Year must be between 1800 - 9999")]
        [RegularExpression(@"^\(?([0-9]{4})\)?$", ErrorMessage = "Invalid Birth Year.")]
        public string BirthYear { get; set; }

        [DefaultValue("")]
        [Required]
        [Display(Name = "Relation to Head")]
        [Column("Relation to Head", TypeName = "string")]
        public string RelationToHead { get; set; }

        [DefaultValue("")]
        [Display(Name = "Second Name")]
        [Column("2nd Name", TypeName = "string")]
        public string SecondndName { get; set; }

        [DefaultValue("")]
        [Display(Name = "Father's Name")]
        [Column("Fathers Name", TypeName = "string")]
        public string FathersName { get; set; }

        [DefaultValue("")]
        [Column("Mosal", TypeName = "string")]
        public string Mosal { get; set; }

        [DefaultValue("")]
        [Column("Profession", TypeName = "string")]
        public string Profession { get; set; }

        [DefaultValue("")]
        [Column("Address Line 1", TypeName = "string")]
        public string AddressLine1 { get; set; }

        [DefaultValue("")]
        [Column("Address Line 2", TypeName = "string")]
        public string AddressLine2 { get; set; }

        [DefaultValue("")]
        [Column("Town", TypeName = "string")]
        public string Town { get; set; }

        [DefaultValue("")]
        [Column("County", TypeName = "string")]
        public string County { get; set; }

        [DefaultValue("")]
        [Column("Postcode", TypeName = "string")]
        public string Postcode { get; set; }

        [DefaultValue("")]
        [Column("Telephone No", TypeName = "string")]
        public string TelephoneNo { get; set; }

        [DefaultValue("")]
        [Column("Mobile No", TypeName = "string")]
        public string MobileNo { get; set; }

        [DefaultValue("")]
        [Column("Email Address", TypeName = "string")]
        public string EmailAddress { get; set; }

        [DefaultValue("")]
        [Column("DateUpdated", TypeName = "string")]
        public DateTime? DateUpdated { get; set; }

        [DefaultValue("")]
        [Column("DateCreated", TypeName = "string")]
        public DateTime? DateCreated { get; set; }
    }
}
