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
    
    public partial class film
    {
        public film()
        {
            this.people = new HashSet<person>();
            this.planets = new HashSet<planet>();
            this.species = new HashSet<species>();
            this.vehicles = new HashSet<vehicle>();
        }
    
        public int id { get; set; }
        public Nullable<System.DateTime> created { get; set; }
        public string director { get; set; }
        public Nullable<System.DateTime> edited { get; set; }
        public Nullable<int> episode_id { get; set; }
        public string opening_crawl { get; set; }
        public string producer { get; set; }
        public Nullable<System.DateTime> release_date { get; set; }
        public string title { get; set; }
    
        public virtual ICollection<person> people { get; set; }
        public virtual ICollection<planet> planets { get; set; }
        public virtual ICollection<species> species { get; set; }
        public virtual ICollection<vehicle> vehicles { get; set; }
    }
}
