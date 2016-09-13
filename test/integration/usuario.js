
describe('Routes: User', () => {

  
  describe('GET /user', () => {
    it('should return a list of users', done => {
      request
        .get('/user')
        .end((err, res) => {
          expect(res.statusCode).to.eql(200);
          expect(res.body).to.be.a('array');
          done(err);
        });
    });
  });
  
});