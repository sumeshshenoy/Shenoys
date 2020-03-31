using StarwarsAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace StarwarsAPI.Controllers
{
    [RoutePrefix("api/default")]
    public class DefaultController : ApiController
    {
        [Route("getcrawl")]
        public opening_crawl GetLongestCrawl()

        {
            opening_crawl openingCrawlLongest = new opening_crawl();
            string longest = "";
            using (StarwarsDBContext dbContext = new StarwarsDBContext())
            {
                var Films = dbContext.films;

                foreach (film f in Films)
                {
                    if (f.opening_crawl.Length > longest.Length)
                    {
                        longest = f.opening_crawl;
                       openingCrawlLongest.openingCrawl = f.title.ToString();
                    }

                }



            }
            return openingCrawlLongest;
        }
        [Route("getchars")]
        public CharName GetChars()
        {
            List<string> charactersList = new List<string>();
            CharName character = new CharName();
            using (StarwarsDBContext dbContext = new StarwarsDBContext())
            {
                List<person> Characters = dbContext.people.ToList();
                foreach (person p in Characters)
                {
                    foreach (film f in p.films)
                    {
                        charactersList.Add(p.name);
                       
                    }
                }
                var characters = charactersList.GroupBy(i => i).OrderByDescending(g => g.Count()).Take(1).Select(g => g.Key );
                foreach (string charName in characters)
                {
                    character.charName = charName;
                }
                return character;
            }
        }

        [Route("getspecies")]
        public Species GetSpecies()
        {
            Species species = new Species();
            using (StarwarsDBContext dbContext = new StarwarsDBContext())
            {
                List<string> listSpecies = new List<string>();
                List<film> filmList = dbContext.films.ToList();
                foreach (film f in filmList)
                {
                    foreach (species s in f.species)
                    {
                        foreach (person p in s.people)
                        {
                            listSpecies.Add(s.name);
                        }

                    }
                }
               species.speciesName= listSpecies.GroupBy(i => i).OrderByDescending(g => g.Count()).Take(2).Select(g => string.Format(g.Key + "({0})", g.Count()));
                return species;
   


            }

        }

        [Route("getpilots")]
        public IEnumerable<planet> GetPilots()
        {
            using (StarwarsDBContext dbcontext = new StarwarsDBContext())
            {
                return dbcontext.planets.ToList();
            }
        }


    }
}
