var allQuestions = { 

"ageAffinity" :  
  {
    "title"   : "Age",
    "fulltext": "Approximately, How old might you be? No worries, we're just looking for a ballpark",
    "comment" : "",
    "type"    : "range",
    "slug"    : "ageAffinity",
    "range"   : {
      "min":  18,
      "max":  85
    },
    "steps": [
      {
        "top" : 25,
        "text": "A young gun."
      },
      {
        "top"  : 45,
        "text" : "Old enough to have all this figured out, young enough to pretend you don't"
      },
      {
        "top": 65,
        "text"   : "Top of the heap.  Master of everything...or at least everything you want to."
      },
      {
        "top": 85,
        "text"   : "The relaxing years, maybe now everyone will give you enough time to actually get some stuff done."
      }
    ]
  },

"ageSimilarity" : 
  {
    "title"   : "Age",
    "fulltext": "Approximately, How old might you be? No worries, we're just looking for a ballpark",
    "comment" : "",
    "type"    : "range",
    "slug"    : "ageSimilarity",
    "range"   : {
      "min":  18,
      "max":  85
    },
    "steps": [
      {
        "top": 25,
        "text": "A young gun."
      },
      {
        "top": 45,
        "text"   : "Old enough to have all this figured out, young enough to pretend you don't"
      },
      {
        "top": 65,
        "text"   : "Top of the heap.  Master of everything...or at least everything you want to."
      },
      {
        "top": 85,
        "text"   : "The golden years, maybe now everyone will give you enough time to actually get some stuff done."
      }
    ]
  },

"artsEntertainment" : 
 {
    "title"   : "Culture Scene",
    "fulltext": "How big of an art, entertainment, and sport scene does a city need to fill what are you looking for?",
    "comment" : "",
    "type"    : "range",
    "slug"    : "artsEntertainment",
    "range"   : {
      "min":  25,
      "max":  113490
    },
    "steps": [
    ]
  },

"childrenCount" :
  {
    "title"   : "Family Size",
    "fulltext": "Everythings has a right size, even families. Do you have or do you want some children of your own?",
    "comment" : "",
    "type"    : "list",
    "slug"    : "childrenCount",
    "answers" : [
      {
        "option" : "0",
        "text"   : "None",
        "caption": "Just Not my thing."
      },
      {
        "option" : "1",
        "text"   : "Just One",
        "caption": "Having someone to call our own just feels right."
      },
      {
        "option": "2",
        "text": "Two for Two",
        "caption": "Siblings make life right, and they can entertain each other."
      },
      {
        "option": "3+",
        "text": "Three or more",
        "caption": "Big families are big fun. Three is the minimum."
      }
    ]
  },

"workDeparture":  
  {
    "title"   : "Time for work",
    "fulltext": "What's the best time to get up and at it?",
    "comment" : "",
    "type"    : "list",
    "slug"    : "workDeparture",
    "answers" : [
      {
        "option": "5am",
        "text": "Between 5 and 6:59 a.m.",
        "caption": "You can't get on top of things if you don't get out there early."
      },
      {
        "option": "7am",
        "text": "Between 7 and 9:00 a.m.",
        "caption": "Early enough to greet the sun, but without all that nasty loss of sleep."
      },
      {
        "option": "9am",
        "text": "Anytime after 9:00 a.m.",
        "caption": "If its still dark out...its still last night."
      }
    ]
  },

"educationFocus" :
  {
    "title"   : "Intellectual persuits",
    "fulltext": "If you could go to school for just one thing, what area would it be in?",
    "comment" : "",
    "type"    : "list",
    "slug"    : "educationFocus",
    "answers" : [
      {
        "option": "none",
        "text": "None",
        "caption": "Schools not my thing, I did my time, now I'm staying as far away as I can."
      },
      {
        "option": "education",
        "text": "Education",
        "caption":   "Learning to teach, or learning how to learn I suppose."
      },
      {
        "option": "arts",
        "text": "Arts",
        "caption": "Visual and performing arts, and communications technologies.  So much excitement."
      },
      {
        "option": "humanities",
        "text": "Humanities",
        "caption": "Studying the deep a facinating world of the ever so mysterious humans"
      },
      {
        "option": "socialstudies",
        "text": "Socal Sciences & Law",
        "caption": "Social and behavioural sciences and Law. Find out why people do the things they do...and the things they shouldn't"
      },
      {
        "option": "business",
        "text": "Business & Management",
        "caption":   "Business, management, and public administration. Somebody needs to keep this world organized, and you'd be awesome at it."
      },
      {
        "option": "physed",
        "text": "Physical and Life Sciences",
        "caption": "The human body, capable of so much if you just know how to use the darn thing"
      },
      {
        "option": "math",
        "text": "Mathematics & Computer Sciences",
        "caption": "Mathmatics, information, and computers. Its all 1's and 0's here...unless its in hex...then its not."
      },
      {
        "option": "engineering",
        "text": "Engineering & Architecture",
        "caption": "Build up, build out, build it better. You've got the skills to keep humanity moving forward, and to keep the roof from caving in."
      },
      {
        "option": "agriculture",
        "text": "Agriculture",
        "caption": "Natural resources and conservation.  Keepin it green, keeping it clean, and keeping the rest of us alive."
      },
      {
        "option": "health", 
        "text": "Health",
        "caption": "You've got the wherewithal to patch people up when we're falling apart.  Hands on helping, its a good way to be."
      },
      {
        "option": "protective", 
        "text": "Personal & Protective Services",
        "caption": "Keeping a sharp eye on life, keeping systems orderly, or running in when everyone else is running away. You can't teach breavery, but you can learn what to do with it."
      },
      {
        "option": "other",
        "text": "Other Education",
        "caption": "There's so much to learn out there, we can't list it all, but if you've got your eye on some learning we didn't mention, this is for you."
      }
    ]
},

"educationLevel":
{
    "title" : "Desired Education Level",
    "fulltext": "What's your ideal education level.  Are you a basement philosopher, or would you rather take your lessons in the school of hard knocks?",
    "comment": "",
    "slug": "educationLevel",
    "answers" : [
      {
        "option"  : "none",
        "caption" :   "Schools not really my thing. No specific educations for me. I learn most things just from living.",
        "text"    : "None"
      },
      {
        "option"  : "highschool",
        "comment" : "Highschool was the best school.  Learned everything I need, and took it from there.",
        "text"    : "Highschool"
      },
      {
        "option"  : "apprenticeship",
        "comment" : "I take the full hands on approach. On the job training, and learning as you go suits me best",
        "text"    : "Apprenticeship"
      },
      {
        "option"  : "college",
        "comment"  : "Learn the skills you really need fast, and stay focus on whats in your future",
        "text" : "College Diploma"
      },
      {
        "option"  : "bachelor",
        "comment" : "The University lifestyle, soaking up the classes at high level of learning helps define who I am and exposes me to so much more",
        "text" : "Bachelor Degree"
      },
      {
        "option"  : "masters",
        "comment" : "Masters and up for me.  With so much out there to learn, I try to take it all in.  Academia is the life for me",
        "text"    : "Masters Degree & UP"
      }
    ]
},

"employmentClass" : 
{
    "title"   : "Employment Type",
    "fulltext": "There's a lot a ways to make a living, and some people prefer to go it alone. Do you ever dream of starting up a business on your own?",
    "comment" : "",
    "type"    : "list",
    "slug"    : "employment-type",
    "answers": [
      {
        "option" : "employee",
        "text"   : "Employee",
        "caption": "I'm more happy working somewhere bigger, and more established.  Less stress, more structure."
      },
      {
        "option" : "selfemployed",
        "text"   : "Self Employed",
        "caption": "I've got the smarts and the drive, I don't need to rely on someone else to run the show, and hey I might just be giving someone else a job as well."
      }
    ]
},

"gender":
  {
    "title": "Gender",
    "fulltext": "Let's get things rolling shall we. First things first...Do you identify yourself as Male or Female?",
    "comment" : "",
    "type"    : "list",
    "slug"    : "gender",
    "answers" : [
      {
        "option" : "male",
        "text"   : "Male",
        "caption"   : "Men...Bros...Dudes...Bastions of all masculinity, ruggedness, and bro-mance."
      },
      {
        "option" : "female",
        "text"   : "Female",
        "caption": "The wonderful and the mysterious Females."
      }
    ]
  },

"homeOwning": 
{
    "title"   : "Home Owning Status",
    "fulltext": "What's your thoughts on owning a house?",
    "comment" : "",
    "type"    : "list",
    "slug"    : "home-owning",
    "answers":  [
      {
        "option" : "own",
        "text"   : "Owner",
        "caption": "My house is my kingdom, and it's not mine unless its got my name on it."
      },
      {
        "option" : "rent",
        "text"   : "Renter",
        "caption": "Too big, too expensive, and too much tying me down. Renting keeps me free."
      }
    ]
},

"houseingCosts" : 
{
    "title"   : "Housing Cost",
    "fulltext": "Looking for a mansion, a town house, or maybe a modest bungalow.  Maybe renting an awesome little bachelor apartment is more your desire.  Either way housing can get expensive in some cities, just how much do you feel comfortable spending on your little piece of heaven every month?",
    "comment" : "",
    "type"    : "range",
    "slug"    : "housingcost",
    "range"   : {
      "min":  615,
      "max":  2408
    },
    "steps": [
    ]
  },

"incomeLevel" : 
{
    "title"   : "Income level",
    "fulltext": "Money doesn't buy much happiness, but it's pretty good at paying the rent. Some people chase the biggest paycheck, and some just want enough that they don't have to worry.  How much do you think you could manage to earn in a year?",
    "comment" : "",
    "type"    : "range",
    "slug"    : "housingcost",
    "range"   : {
      "min":  22700,
      "max":  87878
    },
    "steps": [
    ]
  },

"maritalStatus" : 
  {
    "title"   : "Marital Status",
    "fulltext": "I see, well that leads us straight into our very next question.  You wouldn't happen to be  married would you?  Common law or otherwise?",
    "comment" : "",
    "type"    : "list",
    "slug"    : "marrage-status",
    "answers" : [
      {
        "option" : "married",
        "text"   : "Married",
        "caption": "Wonderfully tangled up in matrimony.  Like two peas in a pod...two bees in a breeze...two...ummm."
      },
      {
        "option" : "single",
        "text"   : "Single",
        "caption": "A free bird, a lone wolf, a sacred chicken?"
      }
    ]
  },

"populationDensity" : 
  {
    "title"   : "Some Personal Space",
    "fulltext": "Canada has some wonderful wide open spaces, and some tightly packed cities.  Whats the right mix for you?",
    "comment" : "",
    "type"    : "range",
    "slug"    : "populationDensity",
    "range"   : {
      "min":  1,
      "max":  1275  
    },
    "steps": [
      {
        "top": 50,
        "text": "I like my fresh air open fields and plenty of nature."
      },
      {
        "top": 150,
        "text"   : "A good yard to work in, and an open park satisfy my needs"
      },
      {
        "top": 300,
        "text"   : "I like having my neighbours close by, and a little bit of motion on my street."
      },
      {
        "top": 600,
        "text"   : "Smaller houses, and apartements suit my needs, and the conviences of the city come with having some people around."
      },
      {
        "top": 800,
        "text" : "City life, isn't city life without the human element.  I like seeing people everywhere I go, and I everything is close by."
      }
    ]
  },

"specficReligion" : 
{
    "title"   : "Specific Religion",
    "fulltext": "Do you identify yourself with any specific religion?",
    "comment" : "",
    "type"    : "list",
    "slug"    : "religion",
    "answers" : [
      {
        "option": "buddhist",
        "text"  : "Buddhist",
        "caption": ""
      },
      {
        "option": "christian",
        "text"  : "Christian",
        "caption":  ""
      },
      { 
        "option": "hindu",
        "text"  : "Hindu",
        "caption": ""
      },
      {
       "option" : "jewish",
       "text"   : "Jewish",
       "caption" : ""
      },
      {
        "option": "muslim",
        "text"  : "Muslim",
        "caption": ""
      },
      {
        "option": "sikh",
        "text":   "Sikh",
        "caption": ""
      },
      {
        "option": "traditional",
        "text"  : "Traditional (Aboriginal) Spirituality",
        "caption": ""
      },
      {
        "option": "other",
        "text": "Other religions, not yet mentioned",
        "caption": ""
      },
      {
        "option": "none",
        "text":    "No religious affiliation",
        "caption": ""
      }
    ]
  },

"transportation" : 
  {
    "title"   : "Transportation",
    "fulltext": "How do you like to get arround?",
    "comment" : "",
    "type"    : "list",
    "slug"    : "transportation",
    "answers" : [
      {
        "option" : "driver",
        "text"   : "Driver",
        "caption": "Just me, my ride, and the road. Doing things my way."
      },
      {
        "option" : "passsenger",
        "text"   : "Car Pool",
        "caption": "Teaming up to keep it fun and easy."
      },
      {
        "option": "public",
        "text":  "Public transit",
        "caption": "Be it bus, trolly, or train. No need to worry about parking here."
      },
      {
        "option":  "bike",
        "text": "Bicycle",
        "caption": "Two wheels, and some peddle power get me around faster and keep me feeling good."
      },
      {
        "option": "walk",
        "text": "Walk",
        "caption": "Taking it easy and taking it all in, be it hustle and bustle, or a casual stroll."
      },
      {
        "option": "other",
        "text": "Other",
        "caption": "Clever you. Maybe you figured out how to fly, or teleport, but if no other option fits, this is it!"
      }
    ]
  },

};
module.exports.allQuestions = allQuestions;;
