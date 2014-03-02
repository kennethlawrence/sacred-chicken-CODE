var allQuestions = {

"profileAge" :  
  {
    "title"   : "Age",
    "fulltext": "Approximately, How old might you be? No worries, we're just looking for a ballpark",
    "comment" : "",
    "type"    : "number",
    "slug"    : "profileage",
    "category": "profile",
    "indicator": "age",
    "order"   : 2,
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

"ageRelation" : 
  {
    "title"   : "Age",
    "fulltext": "A great place to live means having a great group of friends, but we don't all always act our age. In what age range would your best of friends fit in?",
    "comment" : "",
    "type"    : "list",
    "slug"    : "agerelation",
    "category": "relationships",
    "indicator": "age",
    "order"   : 5,
    "answers": [
      {
        "option": -10,
        "relative": 'age',
        "text" : "Much younger then I am",
        "caption": "My friends a quite a bit younger than me."
      },
      {
        "option": -5,
        "relative": 'age',
        "text" : "Slightly younger then I am",
        "caption": "My friends a bit younger than me, but by usually by less than 5 years."
      },
      {
        "option": 0,
        "relative": 'age',
        "text": "My own age",
        "caption": "When I head out, its with a group that all my own age."
      },
      {
        "option": 5,
        "relative": 'age',
        "text" : "Slightly older then I am",
        "caption": "In my group, I'm usually just a bit younger then everyone else."
      },
      {
        "option": 10,
        "relative": 'age',
        "text" : "Much older then I am",
        "caption": "I'm the baby face of this group."
      }
   ]
  },

"artsEntertainment" : 
 {
    "title"   : "Culture Scene",
    "fulltext": "How big of an art, entertainment, and sport scene does a city need to fill what are you looking for?",
    "comment" : "",
    "category": "education",
    "indicator": "social",
    "order"   : 8,
    "type"    : "list",
    "slug"    : "artsentertainment",
    "range"   : {
      "min":  25,
      "max":  113490
    },
    "answers": [
      {
        "option": 0.5,
        "text": "Not Big",
        "caption": "A night at the movies, or at home with a good book is all I really need. I keep active on my own."
      },
      {
        "option": 1,
        "text": "Moderate",
        "caption": "I like to get out once and a while, take in some theater, or sports, but not all the time."
      },
      {
        "option": 1.5,
        "text": "Vast",
        "caption": "I'm never home. Theater, sports, dance, art galleries, everything keeps me going." 
      },
    ]
  },

"numberOfChildren" :
  {
    "title"   : "Family Size",
    "fulltext": "Everythings has a right size, even families. Do you have or do you want some children of your own?",
    "comment" : "",
    "type"    : "list",
    "category": "relationships",
    "indicator": "children",
    "slug"    : "numberofchildren",
    "order"   : 4,
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
    "slug"    : "workdeparture",
    "category" : "lifestyle",
    "indicator": "departure",
    "order"   : 14,
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
    "slug"    : "educationfocus",
    "category": "education",
    "indicator": "focus",
    "order"   : 9,
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
    "slug": "educationlevel",
    "category": "education",
    "indicator": "level",
    "type" : "list",
    "order" : 7,
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
    "slug"    : "employmentclass",
    "category": "financial",
    "indicator": "class",
    "order"   : 13,
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
    "slug"    : "",
    "category": "profile",
    "indicator": "gender",
    "order"   : 1,
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

"homeOwner": 
{
    "title"   : "Home Owning Status",
    "fulltext": "What's your thoughts on owning a house?",
    "comment" : "",
    "type"    : "list",
    "slug"    : "homeowner",
    "category": "financial",
    "indicator": "homeOwner",
    "order"   : 10,
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
    "type"    : "list",
    "slug"    : "housingcost",
    "category": "financial",
    "indicator": "livingExpenses",
    "order"   : 12,
    "answers": [
      {
        "option": "30down",
        "text": "Up to 30% of my income",
        "caption": "I prefer to keep my living expenses minimal to moderate, staying within budget is important to me."
      },
      {
        "option": "30up",
        "text": "More then 30% of my income",
        "caption": "My living space is important to me, other parts of my life can be squeezed to keep up with my housing costs."
      }
    ]
  },

"incomeLevel" : 
{
    "title"   : "Income level",
    "fulltext": "Money doesn't buy much happiness, but it's pretty good at paying the bills. Due to the fact that wages differ depending on where you live, its hard to know how much you can earn in a different city.  If you can, make a guess of how much you think you could manage to earn in a year if you could live anywhere. Otherwise, feel free to move on the the next question.",
    "comment" : "",
    "type"    : "list",
    "slug"    : "incomelevel",
    "category": "financial",
    "indicator": "level",
    "order"   : 11,
    "range"   : {
      "min":  22700,
      "max":  87878
    },
    "answers": [
      {
        "option": 25000,
        "text" : "Somewhere around $25000",
        "caption" : "Anywhere in the ballpark of $25000."
      },
      {
        "option": 50000,
        "text" : "I think about $50000",
        "caption" : "$50000 seems like a reasonable estimate."
      },
      {
        "option": 80000,
        "text" : "$80000 or up.",
        "caption" : "$80000 or up seem within reach."
      },
 
 
    ]
  },

"maritalStatus" : 
  {
    "title"   : "Marital Status",
    "fulltext": "I see, well that leads us straight into our very next question.  You wouldn't happen to be  married would you?  Common law or otherwise?",
    "comment" : "",
    "type"    : "list",
    "slug"    : "maritalstatus",
    "category": "relationships",
    "indicator": "status",
    "order"   :  3,
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
    "type"    : "list",
    "slug"    : "populationdensity",
    "category": "lifestyle",
    "indicator": "density",
    "order"   : 16,
    "range"   : {
      "min":  1,
      "max":  1275  
    },
    "answers": [
      {
        "option": 50,
        "text": "Open spaces for sure",
        "caption": "I like my fresh air open fields and plenty of nature."
      },
      {
        "option": 150,
        "text": "Small Neighbourhoods",
        "caption"   : "A good yard to work in, and an open park satisfy my needs"
      },
      {
        "option": 300,
        "text": "Busy Cities",
        "caption"   : "I like having my neighbours close by, and lots of motion on keeps things lively."
      },
      {
        "option": 600,
        "text": "Major Centres",
        "caption"   : "Small houses, and apartments suit my needs, and the conviences of the city come with having some people around."
      },
      {
        "option": 800,
        "text": "Bright Lights and Huge Cities",
        "caption" : "City life, isn't city life without the human element.  I like seeing people everywhere I go, and I everything is close by."
      }
    ]
  },

"specficReligion" : 
{
    "title"   : "Specific Religion",
    "fulltext": "Do you identify yourself with any specific religion?",
    "comment" : "",
    "type"    : "list",
    "slug"    : "specificreligion",
    "category": "profile",
    "indicator": "religion",
    "order"   : 6,
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
    "category": "lifestyle",
    "indicator": "transportation",
    "order"   : 15,
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

var questionArray = [];
for(var question in allQuestions)
  questionArray.push([question, allQuestions[question]]);

questionArray.sort(function(a,b) {
  return a[1].order - b[1].order
});
module.exports.questions = questionArray;
