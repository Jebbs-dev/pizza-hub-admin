import '@testing-library/jest-dom';
import { render, screen, fireEvent, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TableFilters  from './table-filters';

describe('TableFilters', () => {
  const mockOnFilterChange = jest.fn();
  const mockOnDateFilterChange = jest.fn();

  beforeEach(() => {
    mockOnFilterChange.mockClear();
    mockOnDateFilterChange.mockClear();
  });

  it('renders with title and filter options', () => {
    render(
      <TableFilters
        title="Test Filters"
        selectedFilter=""
        onFilterChange={mockOnFilterChange}
        onDateFilterChange={mockOnDateFilterChange}
        dateFilter={{ startDate: '', endDate: '' }}
        canAddNew={false}
      />
    );
    expect(screen.getByText('Test Filters')).toBeInTheDocument();
    expect(screen.getByText('Select Date')).toBeInTheDocument();
  });

  it('calls onFilterChange when a filter is selected', () => {
    render(
      <TableFilters
        title="Test Filters"
        selectedFilter=""
        onFilterChange={mockOnFilterChange}
        onDateFilterChange={mockOnDateFilterChange}
        dateFilter={{ startDate: '', endDate: '' }}
        canAddNew={false}
      />
    );
    fireEvent.click(screen.getByText('Select Date'));
    fireEvent.click(screen.getByText('Today'));
    expect(mockOnFilterChange).toHaveBeenCalledWith('today');
  });

  it('calls onDateFilterChange when a date is selected in single mode', () => {
    render(
      <TableFilters
        title="Test Filters"
        selectedFilter="single"
        onFilterChange={mockOnFilterChange}
        onDateFilterChange={mockOnDateFilterChange}
        dateFilter={{ startDate: '', endDate: '' }}
        canAddNew={false}
      />
    );
    fireEvent.click(screen.getByText('Pick a date'));
    fireEvent.click(screen.getByText('15')); // Assuming 15 is a valid date
    expect(mockOnDateFilterChange).toHaveBeenCalled();
  });

  it('calls onDateFilterChange when a date range is selected in custom mode', async () => {
    const user = userEvent.setup();
    
    render(
      <TableFilters
        title="Test Filters"
        selectedFilter="custom"
        onFilterChange={mockOnFilterChange}
        onDateFilterChange={mockOnDateFilterChange}
        dateFilter={{ startDate: '', endDate: '' }}
        canAddNew={false}
      />
    );
  
    // Open picker
    await user.click(screen.getByTestId('date-range-picker'));
  
    // Wait for calendar
    const calendar = await screen.findByRole('dialog');
  
    // Select dates - adjust these based on your actual calendar structure
    const months = within(calendar).getAllByRole('grid');
    const firstMonth = months[0];
    const secondMonth = months[1];
    
    const startDate = within(firstMonth).getByText('15');
    const endDate = within(secondMonth).getByText('20');
  
    await user.click(startDate);
    await user.click(endDate);
  
    expect(mockOnDateFilterChange).toHaveBeenCalledWith({
      startDate: expect.any(String),
      endDate: expect.any(String)
    });
  });
}); 