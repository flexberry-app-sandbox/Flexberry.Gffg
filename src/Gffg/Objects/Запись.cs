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
    /// Запись.
    /// </summary>
    // *** Start programmer edit section *** (Запись CustomAttributes)

    // *** End programmer edit section *** (Запись CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ЗаписьE", new string[] {
            "время as \'Время\'"})]
    [View("ЗаписьL", new string[] {
            "время as \'Время\'"})]
    public class Запись : ICSSoft.STORMNET.DataObject
    {
        
        private int fвремя;
        
        // *** Start programmer edit section *** (Запись CustomMembers)

        // *** End programmer edit section *** (Запись CustomMembers)

        
        /// <summary>
        /// время.
        /// </summary>
        // *** Start programmer edit section *** (Запись.время CustomAttributes)

        // *** End programmer edit section *** (Запись.время CustomAttributes)
        public virtual int время
        {
            get
            {
                // *** Start programmer edit section *** (Запись.время Get start)

                // *** End programmer edit section *** (Запись.время Get start)
                int result = this.fвремя;
                // *** Start programmer edit section *** (Запись.время Get end)

                // *** End programmer edit section *** (Запись.время Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Запись.время Set start)

                // *** End programmer edit section *** (Запись.время Set start)
                this.fвремя = value;
                // *** Start programmer edit section *** (Запись.время Set end)

                // *** End programmer edit section *** (Запись.время Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ЗаписьE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ЗаписьE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ЗаписьE", typeof(IIS.Gffg.Запись));
                }
            }
            
            /// <summary>
            /// "ЗаписьL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ЗаписьL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ЗаписьL", typeof(IIS.Gffg.Запись));
                }
            }
        }
    }
}
