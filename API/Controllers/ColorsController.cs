using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class ColorsController : BaseApiController
    {
        private readonly DataContext _dataContext;

        public ColorsController(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        [HttpPost("fav-color")]
        public async Task<ActionResult<string>> SetFavoriteColorAsync(string userId, string color)
        {
            return "NOT YET IMPLEMENTED";
        }
    }
}
