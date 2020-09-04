let identityPool = 'us-east-1:3481c532-99ed-4ccd-90f4-8e37ce0634c3'; //Cognito Identity Pool
let region = 'us-east-1';
let poolId = 'us-east-1_qIa3RwxYd'; //Cognito User Pool
let clientId = 'm87j0rj027fl0r453jjf2pfsd'; //Cognito User Pool App
let appDomain = 'https://octankoffshore.auth.us-east-1.amazoncognito.com';
let endpoint = "https://6s5szhok0h.execute-api.us-east-1.amazonaws.com"; //API Endpoint URL
let authData = {
    ClientId : clientId, 
    AppWebDomain : appDomain,
    TokenScopesArray : ['openid'],
    RedirectUriSignIn : 'https://master.dfqludf80q68z.amplifyapp.com/', //CloudFront Distribution URL
    RedirectUriSignOut : 'https://us-east-1.quicksight.aws.amazon.com/sn/dashboards/892703ea-d6b2-486a-b576-9d8b3b90d71b?directory_alias=ant302-quicksight-mb&ignore=true&ref_=pe_3035110_233161710' //CloudFront Distribution URL
};

