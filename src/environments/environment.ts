export const environment = {
    production: false, 
    apiBaseUrl: 'http://localhost:5251', 
    assetsPath: 'assets/', 
    logoFileName: 'logo1.png', 
    heroFileName: 'image1.png',
    goalFileName: 'goal.jpeg',
    ageFileName: 'age.jpeg',
    riskFileName: 'risk.jpeg',
    targetFileName: 'amount.jpeg',
    horizonFileName:'time.jpeg',
    workFileName:'The Next Applied.png',
    allowedEmailDomains: ['gmail.com','yahoo.com','hotmail.com','example.com', 'test.com'],
    endpoints: {
      auth: {
        login: '/api/auth/login',
        register: '/api/auth/register'
      },
      allocation:{
        getAllocations: '/api/Allocation/compute',
        getCalculatedAllocations: '/api/Allocation/get-calculated-allocations'
      },
      productAllocation: {
        calculate: '/api/ProductAllocation/calculate-product-allocations',
        getCalculatedProducts: '/api/ProductAllocation/get-product-allocations',
        
      },
      products:{
        getProducts: '/api/Products/products'
      }
    }
  };
  
