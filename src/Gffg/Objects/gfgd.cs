﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Gffg
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Gfgd.
    /// </summary>
    // *** Start programmer edit section *** (gfgd CustomAttributes)

    // *** End programmer edit section *** (gfgd CustomAttributes)
    [AutoAltered()]
    [Caption("Gfgd")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("gfgdE", new string[] {
            "time as \'Time\'",
            "hg as \'Hg\'",
            "Запись as \'Запись\'",
            "Запись.время as \'Время\'"}, Hidden=new string[] {
            "Запись.время"})]
    [MasterViewDefineAttribute("gfgdE", "Запись", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "время")]
    [View("gfgdL", new string[] {
            "time as \'Time\'",
            "hg as \'Hg\'",
            "Запись.время as \'Время\'"})]
    public class gfgd : ICSSoft.STORMNET.DataObject
    {
        
        private System.DateTime ftime = System.DateTime.Parse("local");
        
        private int fhg;
        
        private IIS.Gffg.Запись fЗапись;
        
        // *** Start programmer edit section *** (gfgd CustomMembers)

        // *** End programmer edit section *** (gfgd CustomMembers)

        
        /// <summary>
        /// hg.
        /// </summary>
        // *** Start programmer edit section *** (gfgd.hg CustomAttributes)

        // *** End programmer edit section *** (gfgd.hg CustomAttributes)
        public virtual int hg
        {
            get
            {
                // *** Start programmer edit section *** (gfgd.hg Get start)

                // *** End programmer edit section *** (gfgd.hg Get start)
                int result = this.fhg;
                // *** Start programmer edit section *** (gfgd.hg Get end)

                // *** End programmer edit section *** (gfgd.hg Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (gfgd.hg Set start)

                // *** End programmer edit section *** (gfgd.hg Set start)
                this.fhg = value;
                // *** Start programmer edit section *** (gfgd.hg Set end)

                // *** End programmer edit section *** (gfgd.hg Set end)
            }
        }
        
        /// <summary>
        /// time.
        /// </summary>
        // *** Start programmer edit section *** (gfgd.time CustomAttributes)

        // *** End programmer edit section *** (gfgd.time CustomAttributes)
        public virtual System.DateTime time
        {
            get
            {
                // *** Start programmer edit section *** (gfgd.time Get start)

                // *** End programmer edit section *** (gfgd.time Get start)
                System.DateTime result = this.ftime;
                // *** Start programmer edit section *** (gfgd.time Get end)

                // *** End programmer edit section *** (gfgd.time Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (gfgd.time Set start)

                // *** End programmer edit section *** (gfgd.time Set start)
                this.ftime = value;
                // *** Start programmer edit section *** (gfgd.time Set end)

                // *** End programmer edit section *** (gfgd.time Set end)
            }
        }
        
        /// <summary>
        /// Gfgd.
        /// </summary>
        // *** Start programmer edit section *** (gfgd.Запись CustomAttributes)

        // *** End programmer edit section *** (gfgd.Запись CustomAttributes)
        [PropertyStorage(new string[] {
                "Запись"})]
        [NotNull()]
        public virtual IIS.Gffg.Запись Запись
        {
            get
            {
                // *** Start programmer edit section *** (gfgd.Запись Get start)

                // *** End programmer edit section *** (gfgd.Запись Get start)
                IIS.Gffg.Запись result = this.fЗапись;
                // *** Start programmer edit section *** (gfgd.Запись Get end)

                // *** End programmer edit section *** (gfgd.Запись Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (gfgd.Запись Set start)

                // *** End programmer edit section *** (gfgd.Запись Set start)
                this.fЗапись = value;
                // *** Start programmer edit section *** (gfgd.Запись Set end)

                // *** End programmer edit section *** (gfgd.Запись Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "gfgdE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View gfgdE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("gfgdE", typeof(IIS.Gffg.gfgd));
                }
            }
            
            /// <summary>
            /// "gfgdL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View gfgdL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("gfgdL", typeof(IIS.Gffg.gfgd));
                }
            }
        }
    }
}
