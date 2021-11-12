# Lab 8 - Starter <br>
Bagrat Mikhaelyan <br>
1) Our atuomated tests in our Recipe project development pipeline would fit within a Github action that runs whenever code is pushed. This would make it such that the code being pushed is double-checked and would have significantly less bugs than if manually running them or running them all after development is completed. Furthermore, the Github action would allow for an organized history of when and what code was pushed, such that if after a certain point something breaks, we can know from which issue the cause was. <br>
2) No, because end-to-end testing involves emulating user actions from start to finish, whereas a function returning the correct output is an entirely different matter.
3) No, because it would overly complicate the test. An E2E testing (from previous question) would work better.
4) In this case, yes, because unit testing would allow us to test something very specific (in this case being max number of characters). Unlike question 3, the test in this case is much more specific and grounded to a singular task when compared to the overall application, so it would be better than E2E testing. 
