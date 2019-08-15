using Microsoft.EntityFrameworkCore;
using CA_WhatCanIEat.data;
using CA_WhatCanIEat.Controllers;
using System;
using Xunit;
using Microsoft.AspNetCore.Http;
using CA_WhatCanIEat.viewModel;

namespace XUnitTest
{
    public class UnitTest1
    {
        [Fact]
        public void IngredientControllerNotEmpty()
        {
            //set options for dbcontext
            var dbOption = new DbContextOptionsBuilder<DatabaseContext>()
                .UseSqlServer("Server=(localdb)\\mssqllocaldb;Database=CAWhatCanIEat;Trusted_Connection=True;MultipleActiveResultSets=true")
                .Options;

            //set controller + dbcontext
            var controller = new IngredientController(new DatabaseContext(dbOption));

            string item = "all";

            //get result from controller
            var result = controller.Get(item);

            //check if the result is not null
            Assert.NotNull(result);

        }
    }
    public class UnitTest2
    {
       
        [Fact]
        public void ClientController()
        {
            var dbOption = new DbContextOptionsBuilder<DatabaseContext>()
                          .UseSqlServer("Server=(localdb)\\mssqllocaldb;Database=CAWhatCanIEat;Trusted_Connection=True;MultipleActiveResultSets=true")
                          .Options;
            int dietistID = 1;
            var controller = new ClientController(new DatabaseContext(dbOption));
            var result = controller.Get(dietistID);

            //check if the result is not null
            Assert.NotNull(result);
        }
    }

   

}
