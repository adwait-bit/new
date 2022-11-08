﻿using Microsoft.EntityFrameworkCore;
using ProjectAPI.DataAccessLayer;
using ProjectAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProjectAPI.DI
{
    public class AdminRepository : IAdmin
    {
        public readonly PMSDbContext dbContext = null;
        public AdminRepository(PMSDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        public  async Task<string> AdminLogin(AdminModel adminModel, string emailid, string password)
        {

            //    var ar = await dbContext.adminModels.Where(x => x.Email == emailid && x.Password ==
            //      password).FirstOrDefaultAsync();
            //    return emailid;
            if (string.IsNullOrEmpty(emailid) || string.IsNullOrEmpty(password))
            {
                return null;
            }
            var customer = await dbContext.adminModels.FirstOrDefaultAsync(x => x.Email == emailid && x.Password == password);
            if (customer == null)
            {
                return null;
            }
            return (emailid);
        }

        public async Task<string> AdminRegister(AdminModel adminModel)
        {
            dbContext.adminModels.Add(adminModel);
            await dbContext.SaveChangesAsync();
            return adminModel.Email;
        }
        public async Task<string> DeleteAdmin(string emailid)
        {
            var ar = await dbContext.adminModels.Where(x => x.Email == emailid).FirstOrDefaultAsync();
            if (ar != null)
            {
                dbContext.adminModels.Remove(ar);
            }
            await dbContext.SaveChangesAsync();
            return emailid;
        }

        public async Task<int> DeletePolicy(int policyid)
        {
            PolicyRegistrationModel ar = await dbContext.policyRegistrationModels.Where(
                x => x.PolicyId == policyid).FirstOrDefaultAsync();
            if(ar!=null)
            {
                dbContext.policyRegistrationModels.Remove(ar);
            }
            await dbContext.SaveChangesAsync();
            return policyid;
        }

        public async Task<string> UpdateAdmin(string emailid, AdminModel adminModel)
        {
            var ar = await dbContext.adminModels.Where(x => x.Email== emailid).FirstOrDefaultAsync();
            if (ar != null)
            {
                ar.Password = adminModel.Password;
                ar.ConfirmPass = adminModel.ConfirmPass;
            }
            await dbContext.SaveChangesAsync();
            return emailid;
        }

        public async Task<int> UpdatePolicy(int policyid, PolicyRegistrationModel policyRegistrationModel)
        {
            var ar = await dbContext.policyRegistrationModels.Where(
               x => x.PolicyId == policyid).FirstOrDefaultAsync();
            if (ar != null)
            {
                ar.PolicyName = policyRegistrationModel.PolicyName;
                ar.StartDate = policyRegistrationModel.StartDate;
                ar.Duration = policyRegistrationModel.Duration;
                ar.CompanyName = policyRegistrationModel.CompanyName;
                ar.InitialDeposit = policyRegistrationModel.InitialDeposit;
                ar.PolicyType = policyRegistrationModel.PolicyType;
                ar.UserTypes = policyRegistrationModel.UserTypes;
                ar.Term = policyRegistrationModel.Term;
                ar.TermAmount = policyRegistrationModel.TermAmount;
                ar.Interest = policyRegistrationModel.Interest;
            }
            await dbContext.SaveChangesAsync();
            return policyid;
        }

        //public Task UpdatePolicy(int policyid)
        //{
        //    throw new NotImplementedException();
        //}
    }
    
}
