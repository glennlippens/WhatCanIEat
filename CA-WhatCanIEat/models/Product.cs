using System.ComponentModel.DataAnnotations;

namespace CA_WhatCanIEat.models
{
    public class Product
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        public string ImageUrl { get; set; }
        public bool Alcohol_free { get; set; }
        public bool Celery_free { get; set; }
        public bool Crustacean_free { get; set; }
        public bool Dairy_free { get; set; }
        public bool Egg_free { get; set; }
        public bool Fish_free { get; set; }
        public bool Gluten_free { get; set; }
        public bool Kidney_friendly { get; set; }
        public bool Kosher { get; set; }
        public bool Low_potassium { get; set; }
        public bool Lupine_free { get; set; }
        public bool Low_fat_abs { get; set; }
        public bool Mustard_free { get; set; }
        public bool No_oil_added { get; set; }
        public bool Low_sugar { get; set; }
        public bool Paleo { get; set; }
        public bool Peanut_free { get; set; }
        public bool Pecatarian { get; set; }
        public bool Pork_free { get; set; }
        public bool Red_meat_free { get; set; }
        public bool Sesame_free { get; set; }
        public bool Shellfish_free { get; set; }
        public bool Soy_free { get; set; }
        public bool Sugar_conscious { get; set; }
        public bool Tree_nut_free { get; set; }
        public bool Vegan { get; set; }
        public bool Vegetarian { get; set; }
        public bool Wheat_free { get; set; }
    }
}
