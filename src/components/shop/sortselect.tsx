'use client'
import React, { useState, useRef, useEffect } from 'react'

interface SortSelectProps {
  onSortChange: (sortType: string) => void
}

export default function SortSelect({ onSortChange }: SortSelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState('recommended')
  const dropdownRef = useRef<HTMLDivElement>(null)

  const options = [
    { value: 'recommended', label: 'RECOMMENDED' },
    { value: 'newest', label: 'NEWEST FIRST' },
    { value: 'popular', label: 'POPULAR' },
    { value: 'price-high', label: 'PRICE: HIGH TO LOW' },
    { value: 'price-low', label: 'PRICE: LOW TO HIGH' },
    { value: 'rating', label: 'HIGHEST RATED' }
  ]

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSelect = (value: string) => {
    setSelected(value)
    onSortChange(value)
    setIsOpen(false)
  }

  const selectedLabel = options.find(opt => opt.value === selected)?.label || 'RECOMMENDED'

  return (
    <div ref={dropdownRef} style={{ position: 'relative', display: 'inline-block' }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          minWidth: '200px',
          padding: '12px 16px',
          fontSize: '13px',
          fontWeight: 500,
          letterSpacing: '0.5px',
          color: '#1f2937',
          backgroundColor: '#fff',
          border: '1px solid #d1d5db',
          cursor: 'pointer'
        }}
      >
        <span>{selectedLabel}</span>
        <svg
          style={{
            width: '16px',
            height: '16px',
            marginLeft: '8px',
            transition: 'transform 0.2s ease',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
          }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            zIndex: 10,
            width: '100%',
            backgroundColor: '#fff',
            border: '1px solid #d1d5db',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
            marginTop: '4px'
          }}
        >
          {options.map(option => (
            <button
              key={option.value}
              onClick={() => handleSelect(option.value)}
              style={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                padding: '12px 16px',
                fontSize: '13px',
                fontWeight: selected === option.value ? 500 : 400,
                backgroundColor: selected === option.value ? '#f9fafb' : 'transparent',
                border: 'none',
                textAlign: 'left',
                cursor: 'pointer'
              }}
            >
              {selected === option.value && (
                <svg
                  style={{ width: '16px', height: '16px', marginRight: '12px', color: '#1f2937' }}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
              <span style={{ marginLeft: selected !== option.value ? '28px' : '0px' }}>{option.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
