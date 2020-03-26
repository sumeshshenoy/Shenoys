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
        public string GetFilms()

        {
            List<string> openCrawl = new List<string>();
            string longest = "";
            string Film = "";
            using (StarwarsDBContext dbContext = new StarwarsDBContext())
            {
                var Films = dbContext.films;

                foreach (film f in Films)
                {
                    if (f.opening_crawl.Length > longest.Length)
                    {
                        longest = f.opening_crawl;
                        Film = f.title;
                    }

                }


                return Film ;
            }
        }
        [Route("getchars")]
        public IEnumerable<string> GetChars()
        {
            List<string> charactersList = new List<string>();
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
                return characters;
            }
        }

        [Route("getspecies")]
        public IEnumerable<string> GetSpecies()
        {
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
                IEnumerable<string> species = listSpecies.GroupBy(i => i).OrderByDescending(g => g.Count()).Take(2).Select(g => string.Format(g.Key + "({0})", g.Count()));
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
