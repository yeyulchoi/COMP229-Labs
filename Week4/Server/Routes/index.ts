import express from 'express';
const router = express.Router();

/* GET home page. */
router.get('/', function(req:express.Request, res:express.Response, next: express.NextFunction) 
{
  res.render('index', { title: 'Home', page:'home'});    
  // render meaning generate(draw)  Object of title:express is passing to the index template inside of view
                                                  //title: home is key and value.     page should be lower case.
});

/* Display home page. */
router.get('/home', function(req:express.Request, res:express.Response, next: express.NextFunction) 
{
  res.render('index', { title: 'Home', page:'home'});    
  
});

/* Display about page. */
router.get('/about', function(req:express.Request, res:express.Response, next: express.NextFunction) 
{
  res.render('index', { title: 'About Us', page:'about'});    
 
});

/* Display project page. */
router.get('/project', function(req:express.Request, res:express.Response, next: express.NextFunction) 
{
  res.render('index', { title: 'Our Projects', page:'projects'});    

});


/* Display Services page. */
router.get('/services', function(req:express.Request, res:express.Response, next: express.NextFunction) 
{
  res.render('index', { title: 'Our Services', page:'services'});    
 
});

/* Display Contact page. */
router.get('/contact', function(req:express.Request, res:express.Response, next: express.NextFunction) 
{
  res.render('index', { title: 'Contact us', page:'contact'});    
  
});



export default router;
