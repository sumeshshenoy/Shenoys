//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace StarwarsAPI
{
    using System;
    using System.Collections.Generic;
    
    public partial class species
    {
        public species()
        {
            this.films = new HashSet<film>();
            this.people = new HashSet<person>();
        }
    
        public int id { get; set; }
        public string average_height { get; set; }
        public string average_lifespan { get; set; }
        public string classification { get; set; }
        public Nullable<System.DateTime> created { get; set; }
        public string designation { get; set; }
        public Nullable<System.DateTime> edited { get; set; }
        public string eye_colors { get; set; }
        public string hair_colors { get; set; }
        public Nullable<int> homeworld { get; set; }
        public string language { get; set; }
        public string name { get; set; }
        public string skin_colors { get; set; }
    
        public virtual ICollection<film> films { get; set; }
        public virtual ICollection<person> people { get; set; }
    }
}
